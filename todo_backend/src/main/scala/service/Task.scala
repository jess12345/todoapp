package service

import cats.Applicative
import io.circe.{Encoder, Json}
import org.http4s.EntityEncoder
import org.http4s.circe.jsonEncoderOf
import cats.effect.IO

trait Task{
  def task: IO[Task.ToDoTask]
}

object Task {
  implicit def apply(implicit ev: Task): Task = ev
  final case class ToDoTask(
    Id: Int,
    Description: String,
    Status: String // ToDoTaskStatus.Value
   )

  object ToDoTaskStatus extends Enumeration {
    val Todo, Done = Value
  }

  object ToDoTask{
    implicit val todoEncoder: Encoder[ToDoTask] = (a: ToDoTask) => Json.obj(
      ("message", Json.fromString(s" Id: ${a.Id}, Description: ${a.Description}, Status: ${a.Status}")),
    )
    implicit def todoEntityEncoder[F[_]: Applicative]: EntityEncoder[F, ToDoTask] =
      jsonEncoderOf[F, ToDoTask]
  }

  def impl: Task = new Task{
    def task: IO[ToDoTask] = database.TaskRepo.queryDatabase(1)
  }
}