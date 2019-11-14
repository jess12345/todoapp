scalaVersion := "2.13.1"
name := "todo_backend"
organization := "ch.epfl.scala"
version := "1.0"

libraryDependencies ++= Seq(
    "org.typelevel" %% "cats-core" % "2.0.0",

    // postgres db
    "org.tpolecat" %% "doobie-core" % "0.8.4",
    "org.tpolecat" %% "doobie-postgres" % "0.8.4",
)