// import doobie._
// import doobie.implicits._
// import cats.effect.IO
// import scala.concurrent.ExecutionContext

// implicit val cs = IO.contextShift(ExecutionContext.global)

// val xa = Transactor.fromDriverManager[IO](
//   "org.postgresql.Driver", 
//   "jdbc:postgresql:todoapp_db", 
//   "postgres", 
//   ""
// )

// case class Country(code: String, name: String, population: Long)

// def find(n: String): ConnectionIO[Option[Country]] =
//   sql"select code, name, population from country where name = $n".query[Country].option


// object TaskRepo {
//     def get(taskId: Int) =
//         sql"""select id, description, status from tasks where id = ${taskId};""".stripMargin.query[ToDoTask]
    
//     def getAll(taskId: Int) =
//         sql"""select id, description, status from tasks;""".query[ToDoTask]
    
// }