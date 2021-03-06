
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

def main():
    todo = input("Please press '1' if you want see a balance, or press '2' if you want to make a transfer: ")
    if todo == "1":
        clientname = input("Please enter the name of your client, or enter 'all': ")
        balance(clientname)
    elif todo == "2":
        var1 = int(input("Enter the source account number please: "))
        var2 = int(input("Enter the target account number please: "))
        var3 = float(input("Enter the amount please: "))
        transfer(var1,var2,var3)
    else:
        print("Not supported command!")

def balance(name):
    name_flag = 0
    for lines in accounts:
        if name == lines['client_name']:
            print(lines['client_name'], lines['balance'])
            name_flag = 1
        elif name == "all":
            print(lines['client_name'], lines['balance'])
            name_flag = 1
    if name_flag == 0:
        print("Who is " + name + "?")
        return
    
def transfer(from_accnum,to_accnum,amount):
    i = 0
    source_flag = 0
    target_flag = 0
    for lines in accounts:
        if from_accnum == lines['account_number']:
            accounts[i]['balance'] -= amount
            source_flag = 1
        i += 1
    i = 0
    for lines in accounts:
        if to_accnum == lines['account_number']:
            accounts[i]['balance'] += amount
            target_flag = 1
        i += 1
    if source_flag == 0:
        print("The source account does not exist")
        return
    elif target_flag == 0:
        print("The target account does not exist")
        return
    else:
        print("\nThe new status:\n")
        balance("all")
    
main()