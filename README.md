# Postfix Calculator

Simple postfix calculator to turn this:

    5 10 200 + *

to this 

    5 * ( 10 + 200 )

Did this through the command line, so multiplication will have to be string encapsulated.  `node calc.js 5 10 200 + '*'`