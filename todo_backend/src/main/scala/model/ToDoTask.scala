case class ToDoTask(
    Id: Int,
    Description: String,
    Status: ToDoTaskStatus
)

class ToDoTaskStatus extends Enumeration {
    type Type = Value
    val Complete, Done = Value
}
  