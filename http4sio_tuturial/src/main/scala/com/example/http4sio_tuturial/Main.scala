package com.example.http4sio_tuturial

import cats.effect.{ExitCode, IO, IOApp}
import cats.implicits._

object Main extends IOApp {
  def run(args: List[String]) =
    Http4sio_tuturialServer.stream[IO].compile.drain.as(ExitCode.Success)
}