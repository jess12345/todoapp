package configuration

import cats.effect.{ContextShift, Timer}
import fs2.Stream
import org.http4s.client.blaze.BlazeClientBuilder
import org.http4s.implicits._
import org.http4s.server.blaze.BlazeServerBuilder
import org.http4s.server.middleware.Logger
import cats.effect.IO
import org.http4s.HttpRoutes
import org.http4s.dsl.Http4sDsl
import service.Task

import scala.concurrent.ExecutionContext.global

object AppServer {

  object AppRoutes {
    def TaskRoutes(H: Task): HttpRoutes[IO] = {
      val dsl = new Http4sDsl[IO]{}
      import dsl._
      HttpRoutes.of[IO] {
        case GET -> Root / "task" => H.task.flatMap(Ok(_))
      }
    }
  }

  def stream(implicit T: Timer[IO], C: ContextShift[IO]): Stream[IO, Nothing] = {
    for {
      _ <- BlazeClientBuilder[IO](global).stream
      httpApp = AppRoutes.TaskRoutes(Task.impl).orNotFound
      finalHttpApp = Logger.httpApp(logHeaders = true, logBody = true)(httpApp)
      exitCode <- BlazeServerBuilder[IO]
        .bindHttp(port = 9999, host="0.0.0.0")
        .withHttpApp(finalHttpApp)
        .serve
    } yield exitCode
  }.drain
}
