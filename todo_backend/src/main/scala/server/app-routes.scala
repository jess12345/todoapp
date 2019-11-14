package server

import cats.effect.Sync
import cats.implicits._
import org.http4s.HttpRoutes
import org.http4s.dsl.Http4sDsl
import server.services.ToDoTasks
import server.services._

object AppRoutes {

  def ToDoTaskRoutes[F[_]: Sync](toDoTasks: ToDoTasks[F]): HttpRoutes[F] = {
    val dsl = new Http4sDsl[F]{}
    import dsl._
    HttpRoutes.of[F] {
      case GET -> Root / "task" => {
        System.out.println(s"GET task")
        for {
          task <- toDoTasks.get
          resp <- Ok(task)
        } yield resp
      }
    }
  }

  def TaskRoutes[F[_]: Sync](H: Task[F]): HttpRoutes[F] = {
    val dsl = new Http4sDsl[F]{}
    import dsl._
    HttpRoutes.of[F] {
      case GET -> Root / "t" => {
        System.out.println(s"GET t")
        for {
          task <- H.task
          resp <- Ok(task)
        } yield resp
      }
    }
  }

}