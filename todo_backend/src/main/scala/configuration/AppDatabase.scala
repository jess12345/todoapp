package configuration

import cats.effect.{Blocker, ContextShift, IO}
import doobie.Transactor
import doobie.util.ExecutionContexts
import doobie.util.transactor.Transactor.Aux

trait AppDatabase {
  implicit val cs: ContextShift[IO] = IO.contextShift(ExecutionContexts.synchronous)
  val db: Aux[IO, Unit] = Transactor.fromDriverManager[IO](
    driver = "org.postgresql.Driver",
    url = "jdbc:postgresql://db:5432/todoapp_db",
    user = "todoapp",
    pass = "pwd",
    Blocker.liftExecutionContext(ExecutionContexts.synchronous)
  )
}