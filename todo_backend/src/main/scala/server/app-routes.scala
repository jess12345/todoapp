package server

import cats.effect.Sync
import cats.implicits._
import org.http4s.HttpRoutes
import org.http4s.dsl.Http4sDsl
import server.services._

object AppRoutes {

  def TaskRoutes[F[_]: Sync](H: Task[F]): HttpRoutes[F] = {
    val dsl = new Http4sDsl[F]{}
    import dsl._
    HttpRoutes.of[F] {
      case GET -> Root / "task" => H.task.flatMap(Ok(_))
    }
  }

}