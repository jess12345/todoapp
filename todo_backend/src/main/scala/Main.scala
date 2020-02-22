import cats.effect.{ExitCode, IO, IOApp}
import cats.implicits._
import configuration.AppServer

object Main extends IOApp {
  def run(args: List[String]): IO[ExitCode] =
    AppServer.stream.compile.drain.as(ExitCode.Success)
}