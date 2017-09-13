
accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

# Create function that returns the name and balance of cash on an account

# Create function that transfers an balance of cash from one account to another
# it should have three parameters:
#  - from account_number
#  - to account_number
#  - balance
#
# Print "404 - account not found" if any of the account numbers don't exist

# clientname = input("Please enter the name of your client, or enter 'all': ")

def balance(name):
    for lines in accounts:
        if name == lines['client_name']:
            print(lines['client_name'], lines['balance'])
        elif name == "all":
            print(lines['client_name'], lines['balance'])
        

def transfer(from_accnum,to_accnum,amount):
    i = 0
    for lines in accounts:
        if from_accnum == lines['account_number']:
            accounts[i]['balance'] -= amount
        i += 1
    i = 0
    for lines in accounts:
        if to_accnum == lines['account_number']:
            accounts[i]['balance'] += amount
        i += 1
    balance("all")


# var1 = int(input("Enter the source account number: "))
# var2 = int(input("Enter the target account number: "))
# var3 = int(input("Enter amount: "))
# balance(clientname)
def main():
    todo = input("Please press '1' if you want see a balance, or press '2' if you want to make a transfer: ")
    if todo == "1":
        print("Balance")
    elif todo == "2":
        print("Transfer")
    else:
        print("Not supported command!")
main()
# transfer(var1,var2,var3)