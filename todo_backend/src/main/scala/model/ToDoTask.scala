//package model
//
//import cats.Applicative
//import io.circe.{Encoder, Json}
//import org.http4s.EntityEncoder
//import org.http4s.circe.jsonEncoderOf
//
//case class ToDoTask(
//                      Id: Int,
//                      Description: String,
//                      Status: String // ToDoTaskStatus.Value
//                    )
//
//object ToDoTaskStatus extends Enumeration {
//    val Todo, Done = Value
//}
//
//object ToDoTask{
//    implicit val todoEncoder: Encoder[ToDoTask] = new Encoder[ToDoTask] {
//        final def apply(a: ToDoTask): Json = Json.obj(
//            ("message", Json.fromString(s" Id: ${a.Id}, Description: ${a.Description}, Status: ${a.Status}")),
//        )
//    }
//    implicit def todoEntityEncoder[F[_]: Applicative]: EntityEncoder[F, ToDoTask] =
//        jsonEncoderOf[F, ToDoTask]
//}