from domino import Domino

def initialize_dominoes():
    dominoes = []
    dominoes.append(Domino(5, 2))
    dominoes.append(Domino(4, 6))
    dominoes.append(Domino(1, 5))
    dominoes.append(Domino(6, 7))
    dominoes.append(Domino(2 ,4))
    dominoes.append(Domino(7, 1))
    return dominoes

dominoes = initialize_dominoes()
# You have the list of Dominoes
# Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides
# eg: [2, 4], [4, 3], [3, 5] ...

for j in range(len(dominoes)):
    for i in range(j+1, len(dominoes)):
        if  dominoes[j].values[1] == dominoes[i].values[0]:
            dominoes[j+1], dominoes[i] = dominoes[i], dominoes[j+1]
print(dominoes)
