#JS Form Validator

This is an open source Java Script library that makes client side form validation easier. It's very basic right now and open to contributions. Below is a roadmap of features that can be implemented.

- Writing the warning message.
- Expanding date validation with different options.
- Password difficulty checker

##Instructions
In order for the validator to work, the `onsubmit="return validateForm(this)"` event should be added to the form tag. 

`<form id="form_main" method="post" action="index.php" onblur="return validateForm(this)" onsubmit="return validateForm(this)">`

Class field of the object determines the type of the validation(`class="JSFV-required"`). There might be multiple types of validation in one object(`class="JSFV-required JSFV-date"`) 

All the types are listed below:

`JSFV-required
JSFV-email
JSFV-date
JSFV-alpha
JSFV-numeric
JSFV-alphanumeric`

If the validation will be done right after moving to a new field `onblur="jsfvRealtime(this)"` should be added to the tag.

e.g. 
`<td class="field"><input type="text" id="date" class="JSFV-date" onblur="jsfvRealtime(this)"/>`

If the field cannot pass the validation, the background will return to red, otherwise white. These colors can be changed int jsfvRealtime() function. 

##Contact
Written by @icanberk (anything [at] icanberk [dot] com), modified by @rthprog.