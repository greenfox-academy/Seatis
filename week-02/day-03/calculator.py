# Create a simple calculator application which does read the parameters from the prompt 
# and prints the result to the prompt. 

# It should support the following operations: 
# +, -, *, /, % and it should support two operands. 

# The format of the expressions must be: {operation} {operand} {operand}. 
# Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)

# You should use the input() function to accept user input
# It should work like this:

# Start the program
# It prints: "Please type in the expression:"
# Waits for the user input
# Print the result
# Exit

def calculator(operator,op_1,op_2):
    if operator == "+":
        result = op_1 + op_2
    elif operator == "-":
        result = op_1 - op_2
    elif operator == "*":
        result = op_1 * op_2
    elif operator == "/":
        if op_2 != 0:
            result = op_1 / op_2
        else:
            result = "Division by zero is not permitted!"
    elif operator == "%":
        if op_2 != 0:
            result = op_1 % op_2
        else:
            result = "Division by zero is not permitted!"
    else:
        result = "No operator added"
    print ("The result is: ", result)
        
in_1, in_2, in_3 = input("Please type in the expression: ").split()
calculator(in_1,int(in_2),int(in_3))