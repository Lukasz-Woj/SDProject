def fibonacci(n):
    Fminus1 = 1
    Fminus2 = 0
    i = 0
    while i <=n:
        if i > 1:
            Fi = Fminus1 + Fminus2
            Fminus2 = Fminus1
            Fminus1 = Fi
        elif i==1:
            Fi = 1
        else:
            Fi = 0
        i = i + 1
    return Fi

def fibonacci_rek(n):
    if n > 1:
        return fibonacci_rek(n-1) + fibonacci_rek(n-2)
    elif n == 1:
        return 1
    else:
        return 0

n = int(input("Wprowadź n: "))

for i in range(0, n+1):
    print("F", i, "=", fibonacci(i), sep="")
    
