package database

import cats.effect.IO
import configuration.AppDatabase
import doobie.implicits.{toConnectionIOOps, toSqlInterpolator}
import service.Task.ToDoTask

object TaskRepo extends AppDatabase {
  def queryDatabase(taskId: Int): IO[ToDoTask] = {
    val query = sql"""select id, description, status from tasks where id=$taskId""".query[ToDoTask].unique
    IO(query.transact(db).unsafeRunSync)
  }
}

