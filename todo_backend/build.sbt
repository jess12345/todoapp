val sVersion = "2.12.8"
val catsVersion = "2.0.0"
val Http4sVersion = "0.20.8"
val CirceVersion = "0.11.1"
val Specs2Version = "4.1.0"
val LogbackVersion = "1.2.3"
val doobieVersion = "0.8.4"

lazy val root = (project in file("."))
  .enablePlugins(JavaAppPackaging, DockerPlugin)
  .settings(
    organization := "jessica.hu",
    name := "todoapp",
    version := "0.0.1",
    scalaVersion := sVersion,
    libraryDependencies ++= Seq(
      // Cats
      "org.typelevel"   %% "cats-core"           % catsVersion,

      // postgres db
      "org.tpolecat"    %% "doobie-core"         % doobieVersion,
      "org.tpolecat"    %% "doobie-postgres"     % doobieVersion,

      // Http4s
      "org.http4s"      %% "http4s-blaze-server" % Http4sVersion,
      "org.http4s"      %% "http4s-blaze-client" % Http4sVersion,
      "org.http4s"      %% "http4s-circe"        % Http4sVersion,
      "org.http4s"      %% "http4s-dsl"          % Http4sVersion,
      "io.circe"        %% "circe-generic"       % CirceVersion,
      "org.specs2"      %% "specs2-core"         % Specs2Version % "test",
      "ch.qos.logback"  %  "logback-classic"     % LogbackVersion
    ),
    addCompilerPlugin("org.typelevel" %% "kind-projector"     % "0.10.3"),
    addCompilerPlugin("com.olegpy"    %% "better-monadic-for" % "0.3.0")
  )

scalacOptions ++= Seq(
  "-deprecation",
  "-encoding", "UTF-8",
  "-language:higherKinds",
  "-language:postfixOps",
  "-feature",
  "-Ypartial-unification",
  "-Xfatal-warnings",
)

