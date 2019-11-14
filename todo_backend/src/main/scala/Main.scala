import cats.effect.{ExitCode, IO, IOApp}
import cats.implicits._
import server.AppServer

object Main extends IOApp {
  def run(args: List[String]) =
    AppServer.stream[IO].compile.drain.as(ExitCode.Success)
}