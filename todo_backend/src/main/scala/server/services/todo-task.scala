package server.services

import cats.Applicative
import cats.effect.Sync
import cats.implicits._
import io.circe.{Encoder, Decoder, Json, HCursor}
import io.circe.generic.semiauto._
import org.http4s._
import org.http4s.implicits._
import org.http4s.{EntityDecoder, EntityEncoder, Method, Uri, Request}
import org.http4s.client.Client
import org.http4s.client.dsl.Http4sClientDsl
import org.http4s.Method._
import org.http4s.circe._

trait ToDoTasks[F[_]]{
  def get: F[ToDoTasks.Joke]
}

object ToDoTasks {
  def apply[F[_]](implicit ev: ToDoTasks[F]): ToDoTasks[F] = ev

  final case class Joke(joke: String) extends AnyVal

  object Joke {
    implicit val jokeDecoder: Decoder[Joke] = deriveDecoder[Joke]
    implicit def jokeEntityDecoder[F[_]: Sync]: EntityDecoder[F, Joke] =
      jsonOf
    implicit val jokeEncoder: Encoder[Joke] = deriveEncoder[Joke]
    implicit def jokeEntityEncoder[F[_]: Applicative]: EntityEncoder[F, Joke] =
      jsonEncoderOf
  }

  final case class ToDoTaskError(e: Throwable) extends RuntimeException



  def impl[F[_]: Sync](C: Client[F]): ToDoTasks[F] = new ToDoTasks[F]{
    val dsl = new Http4sClientDsl[F]{}
    import dsl._
    def get: F[ToDoTasks.Joke] = {
      C.expect[Joke](GET(uri"https://icanhazdadjoke.com/"))
        .adaptError{ case t => ToDoTaskError(t)} // Prevent Client Json Decoding Failure Leaking
    }
  }
}