//
//import doobie._
//import doobie.implicits._
//import cats._
//import cats.effect._
//import cats.implicits._
//import doobie.util.ExecutionContexts
//
//// We need a ContextShift[IO] before we can construct a Transactor[IO]. The passed ExecutionContext
//// is where nonblocking operations will be executed. For testing here we're using a synchronous EC.
//implicit val cs = IO.contextShift(ExecutionContexts.synchronous)
//
//// A transactor that gets connections from java.sql.DriverManager and executes blocking operations
//// on an our synchronous EC. See the chapter on connection handling for more info.
//val xa = Transactor.fromDriverManager[IO](
//  "org.postgresql.Driver",     // driver classname
//  "jdbc:postgresql://localhost:9990/todoapp_db",     // connect URL (driver-specific)
//  "todoapp",                  // user
//  "",                          // password
//  Blocker.liftExecutionContext(ExecutionContexts.synchronous) // just for testing
//)
//val program1 = 42.pure[ConnectionIO]
//
//val io = program1.transact(xa)
//// io: IO[Int] = Async(
////   cats.effect.internals.IOBracket$$$Lambda$9004/1032454161@57dce873,
////   false
//// )
//io.unsafeRunSync
//// res0: Int = 42
