package database

import cats.effect._
import cats.implicits._
import doobie._
import doobie.implicits._
import doobie.util.ExecutionContexts
import server.services.Task.ToDoTask

object TaskRepo {
  // We need a ContextShift[IO] before we can construct a Transactor[IO]. The passed ExecutionContext
  // is where nonblocking operations will be executed. For testing here we're using a synchronous EC.
  implicit val cs = IO.contextShift(ExecutionContexts.synchronous)

  // A transactor that gets connections from java.sql.DriverManager and executes blocking operations
  // on an our synchronous EC. See the chapter on connection handling for more info.
  val xa = Transactor.fromDriverManager[IO](
    "org.postgresql.Driver",     // driver classname
    "jdbc:postgresql://127.0.0.1:9990/todoapp_db",     // connect URL (driver-specific)
    "todoapp",                  // user
    "",                          // password
    Blocker.liftExecutionContext(ExecutionContexts.synchronous) // just for testing
  )

  def queryDatabase(taskId: Int): ToDoTask = {
    val program2 = sql"""select id, description, status from tasks where id=$taskId""".query[ToDoTask].unique
    val io2 = program2.transact(xa)
    io2.unsafeRunSync
  }

  def query1(): Int = {
    val program1 = 42.pure[ConnectionIO]
    val io = program1.transact(xa)
    io.unsafeRunSync
  }
  def query2(taskId: Int): Int = {
    val program2 = sql"""select $taskId""".query[Int].unique
    val io2 = program2.transact(xa)
    io2.unsafeRunSync
  }
}

