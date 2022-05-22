def totalTax(amount):
    if sales < 100 :
        tax = sales * 0.05
    elif sales >= 100 and sales <= 250 :
        tax = ((sales - 150) * 0.1) + 5
    elif sales >= 250 and sales <= 500 :
        tax = ((sales - 250) * 0.15) + (150 * 0.1) + 5
    elif sales >= 500 and sales <= 1000 :
        tax = ((sales - 500) * 0.2) + (250 * 0.15) + (150 * 0.1) + 5
    else:
        tax = ((sales - 1000) * 0.25) + (500 * 0.2) + (250 * 0.15) + (150 * 0.1) + 5

    return tax

salesFiles = open(r'C:\Users\GANESH MAGANTI\Desktop\sales.txt')

salesList = []

for sales in salesFiles:
    sales = float(sales.strip("\n"))
    salesList.append(sales)

for each in salesList:
    print(totalTax(each))

    