package server

import cats.effect.Sync
import cats.implicits._
import org.http4s.HttpRoutes
import org.http4s.dsl.Http4sDsl
import server.services.ToDoTasks

object AppRoutes {

  def jokeRoutes[F[_]: Sync](toDoTasks: ToDoTasks[F]): HttpRoutes[F] = {
    val dsl = new Http4sDsl[F]{}
    import dsl._
    HttpRoutes.of[F] {
      case GET -> Root / "task" =>
        for {
          task <- toDoTasks.get
          resp <- Ok(task)
        } yield resp
    }
  }
}