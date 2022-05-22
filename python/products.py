productsFile = open(r'C:\Users\GANESH MAGANTI\Desktop\products.txt', encoding='utf-8')
keywordsFile = open(r'C:\Users\GANESH MAGANTI\Desktop\keywords.txt', encoding='utf-8')

keywordsList = []
productsList = []
productCount = 0

for keywords in keywordsFile:
    keywords = keywords.strip("\n").lower()
    keywordsList.append(keywords)

for product in productsFile:
    product = product.strip("\n").lower()
    for keys in keywordsList:
        if product.find(keys) != -1:
            productCount += 1
            productsList.append(product)

print(productCount)