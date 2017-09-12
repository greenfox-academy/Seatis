
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
        
# balance(clientname)

var1, var2, var3 = input("Give me the details: ").split()
def transfer(from_accnum,to_accnum,amount):
    i = 0
    for lines in accounts:
        if from_accnum == lines['account_number']:
            print("DEBUG")
            accounts[i]['balance'] -= amount
        i += 1
    i = 0
    for lines in accounts:
        if to_accnum == lines['account_number']:
            accounts[i]['balance'] += amount
            i += 1
    balance("all")
transfer(var1,var2,var3)
