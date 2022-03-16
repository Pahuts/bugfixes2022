function sample(executionContext) {
  var formContext = executionContext.getFormContext
	var contactName = formContext.getAttribute("firstname").getValue()

  contactName.setValue("John")
  console.log('Sample lang')
}