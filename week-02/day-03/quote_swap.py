# Accidentally I messed up this quote from Richard Feynman.
# Two words are out of place
# Your task is to fix it by swapping the right words with code

# Also, print the sentence to the output with spaces in between.

words = ["What", "I", "do", "create,", "I", "cannot", "not", "understand."]
words[3], words[6] = words[6], words[3]
words[4], words[7] = words[7], words[4]
words[5], words[7] = words[7], words[5]
words[6], words[7] = words[7], words[6]
print(words)