import { EMPTY, Observable, ObservedValueOf, OperatorFunction } from 'rxjs'
import { ajax, AjaxResponse, AjaxRequest } from 'rxjs/ajax'

export function csrf() {
  return cookie('tsec-csrf')
}

export function reviseHeader(header: object) {
  const token = sessionStorage.getItem(config.tokenStorageName)
  const authHeader = token ? `Bearer ${token}` : null
  const headers = r.merge(
    {
      Authorization: authHeader,
      'X-TSec-Csrf': csrf(),
      'Content-Type': 'application/json'
    },
    header
  )
  return headers
}

export function get<T>(
  url: string,
  header: object = {},
): Observable<T> {
  const headers = reviseHeader(header)
  return ajax({
    method: 'GET',
    url: config.apiHost + url,
    headers,
    withCredentials: true
  }).pipe(
    map((x: AjaxResponse) => x.response),
    catching(stepUp)
  )
}


const getTasks = () => {
  return get<RawCompany[]>('/company?au=true&online=true').pipe(
    map(data => {
      const preparedCompanies: Company[] = toCompanies(data)
      const companyId = r.path(['match', 'params', 'companyId'], props)
      const selected = selectedCompany(companyId)(preparedCompanies)
      const companiesInfo = {
        companyList: {
          kind: 'CompanyList',
          companies: preparedCompanies
        },
        isLoading: false,
        selectedCompany: selected,
        onboardModal: initOnBoardModal(selected)
      }
      return r.mergeDeepLeft(companiesInfo, state)
    }),
    catchError(({ status }) => {
      return of(
        r.assoc(
          'companyList',
          { kind: 'HttpError', code: status },
          updatedState
        )
      )
    })
  )
}