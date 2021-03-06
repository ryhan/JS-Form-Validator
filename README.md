#JS Form Validator

JSFV is an open source Java Script library that simplifies client side form validation. 

It's very basic right now, and we welcome contributions.

To learn more, check out  [jsformvalidator.com](http://www.jsformvalidator.com/ "jsformvalidator") 

##Instructions

###Validate on submission
Add `onsubmit="return validateForm(this)"` to your form tag. For example,

`<form id="form_main" method="post" action="submit.php" onsubmit="return validateForm(this)">`

This will call the validator when a user attempts to submit.

###Label restrictions on input
Describe the restrictions on each input field through classes.
You can also place multiple types of validation on a single field.
For example, to require an email address,use `class="JSFV-required JSFV-email"`

Here is a listing of class names that are validated.

- `JSFV-required`
- `JSFV-email`
- `JSFV-date`
- `JSFV-alpha`
- `JSFV-numeric`
- `JSFV-alphanumeric`
- `JSFV-password`
- `JSFV-password-weak`
- `JSFV-password-med`
- `JSFV-password-strong`

####Password Validation

- "Strong" passwords require at least one character (!@#$%^&*), one digit, and a minimum of 8 characters
- "Medium" passwords require at least one digit and a minimum of 8 characters
- "Weak" passwords require a minimum of 6 characters.

`JSFV-password` defaults to the strong password requirement.

###Real-time Validation
To validate a field directly after the user completes a field, add 
`onblur="jsfvRealtime(this)"` to the tag.

`<input type="text" id="date" class="JSFV-date" onblur="jsfvRealtime(this)"/>`

The field will become highlighted if it cannot pass the validation. 
The colors assoicated with the highlighted state can be changed in the jsfvRealtime() function. 

##Roadmap

- Passing a warning message.
- Expanding date validation with different options.

##Authors

Ryan Lin

- [@ryanlin_cmu](https://twitter.com/#!/ryanlin_cmu "@ryanlin_cmu")
- [ryanlin.com](http://ryanlin.com "ryanlin.com")

Ilteris Canberk

- [@icanberk](https://twitter.com/icanberk "@icanberk") 
- [icanberk.com](http://icanberk.com/ "icanberk.co/")
- anything [at] icanberk [dot] com

Ryhan Hassan

- [@rthprog](https://twitter.com/rthprog "@rthprog") 
- [rthprog.github.com](http://rthprog.github.com/ "rthprog.github.com")
- rthprog [at] gmail [dot] com