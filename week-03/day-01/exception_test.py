while True:
    try:
        number = int(input("Give me your favourit number: "))
        print(20/number)
        break
    except ValueError:
        print("Make sure and enter a number!")
    except ZeroDivisionError:
        print("Do not pick zero!")
    except:
        break
    finally:
        print("loop complete")