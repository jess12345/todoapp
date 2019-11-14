package server.services

import cats.Applicative
import cats.implicits._
import io.circe.{Encoder, Json}
import org.http4s.EntityEncoder
import org.http4s.circe._

trait Task[F[_]]{
  def task: F[Task.ToDoTask]
}

object Task {
  implicit def apply[F[_]](implicit ev: Task[F]): Task[F] = ev

  final case class ToDoTask(
    Id: Int,
    Description: String,
    Status: ToDoTaskStatus.Value)

  object ToDoTaskStatus extends Enumeration {
    val Todo, Done = Value
  }

  object ToDoTask{
    implicit val todoEncoder: Encoder[ToDoTask] = new Encoder[ToDoTask] {
      final def apply(a: ToDoTask): Json = Json.obj(
        ("message", Json.fromString(s" Id: ${a.Id}, Description: ${a.Description}, Status: ${a.Status}")),
      )
    }
    implicit def todoEntityEncoder[F[_]: Applicative]: EntityEncoder[F, ToDoTask] =
      jsonEncoderOf[F, ToDoTask]
  }

  def impl[F[_]: Applicative]: Task[F] = new Task[F]{
    def task: F[Task.ToDoTask] = ToDoTask(1, "task", ToDoTaskStatus.Todo).pure[F]
  }
}