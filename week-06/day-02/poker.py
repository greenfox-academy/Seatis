suit = ["hearts", "diamonds", "clubs", "spades"]
value = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"]

def get_hand(hand_1):
    if len(hand_1) == 5:
        hand_1_list = []
        for card in hand_1:
            if card[0] == "H":
                card_suit = "hearts"
            elif card[0] == "D":
                card_suit = "diamonds"
            elif card[0] == "C":
                card_suit = "clubs"
            elif card[0] == "S":
                card_suit = "spades"
            card_value = value.index(card[1]) + 2
            hand_1_list.append({"color": card_suit, "value": card_value})
        return hand_1_list

def high_number(current_hand):
    values = []
    for card in current_hand:
        values.append(card["value"])
    return current_hand[values.index(max(values))]

def check_hand(current_hand):
    values = []
    for card in current_hand:
        values.append(str(card["value"]))
    pair = 0
    drill = False
    poker = False
    for current_value in values:
        if values.count(current_value) == 2:
            pair += 1
        elif values.count(current_value) == 3:
            drill = True
        elif values.count(current_value) == 4:
            poker = True 
    if pair == 2 and drill:
        print("You have full house")
    elif pair == 2:
        print("You have a pair!")
    elif pair == 4:
        print("You have two pairs!")
    elif drill:
        print("You have three of a kind!")
    elif poker:
        print("You have four of a kind!")
    else:
        
        high_card = high_number(current_hand)
        print("You have just a high number, it is: " + value[high_card["value"] - 2] + " of " + high_card["color"])
    return values




def main():
    hand = get_hand(["H2", "C3", "S4", "SA", "D7"])
    # print(hand)
    # print(high_number(hand))
    print(check_hand(hand))


main()