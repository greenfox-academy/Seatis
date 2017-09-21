# We have a number of bunnies and each bunny has two big floppy ears.
# We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

def bunnies_ears(bunnies):
    if bunnies == 0:
        return 0
    elif bunnies == 1:
        return 2
    else:
        return bunnies_ears(bunnies-1) + 2

print(bunnies_ears(20))