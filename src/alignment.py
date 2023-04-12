from pyscript import Element
from pyscript import display

# output the result
def output(*args, **kwargs):
  if not seq1 and not seq2:
      display('Empty sequence! Please retry.', target="content")
  [X, Y, M] = distance_matrix(seq1.value, seq2.value)
  [str1, str2] = backtrace(seq1.value, seq2.value, X, Y, M)
  score = M[len(seq2.value)][len(seq1.value)]

  display(("Alignment Score:" + str(score)), target="content")
  display((str1), target="content")
  display((str2), target="content")

# reset what you have input
def reset():
    seq1.clear()
    seq2.clear()
    content.clear()

# id selector
seq1 = Element("longSeq")
seq2 = Element("shortSeq")
content = Element("content")

# global variable
global S
global E
global MIN
global amino
global blosum
S = -11
E = -1
MIN = -float("inf")
amino = ['A', 'R', 'N', 'D', 'C', 'Q', 'E', 'G', 'H', 'I', 'L',
         'K', 'M', 'F', 'P', 'S', 'T', 'W', 'Y', 'V', 'B', 'Z', 'X', '*']
blosum = [
[ 4, -1, -2, -2,  0, -1, -1,  0, -2, -1, -1, -1, -1, -2, -1,  1,  0, -3, -2,  0, -2, -1,  0, -4],
[-1,  5,  0, -2, -3,  1,  0, -2,  0, -3, -2,  2, -1, -3, -2, -1, -1, -3, -2, -3, -1,  0, -1, -4],
[-2,  0,  6,  1, -3,  0,  0,  0,  1, -3, -3,  0, -2, -3, -2,  1,  0, -4, -2, -3,  3,  0, -1, -4],
[-2, -2,  1,  6, -3,  0,  2, -1, -1, -3, -4, -1, -3, -3, -1,  0, -1, -4, -3, -3,  4,  1, -1, -4],
[ 0, -3, -3, -3,  9, -3, -4, -3, -3, -1, -1, -3, -1, -2, -3, -1, -1, -2, -2, -1, -3, -3, -2, -4],
[-1,  1,  0,  0, -3,  5,  2, -2,  0, -3, -2,  1,  0, -3, -1,  0, -1, -2, -1, -2,  0,  3, -1, -4],
[-1,  0,  0,  2, -4,  2,  5, -2,  0, -3, -3,  1, -2, -3, -1,  0, -1, -3, -2, -2,  1,  4, -1, -4],
[ 0, -2,  0, -1, -3, -2, -2,  6, -2, -4, -4, -2, -3, -3, -2,  0, -2, -2, -3, -3, -1, -2, -1, -4],
[-2,  0,  1, -1, -3,  0,  0, -2,  8, -3, -3, -1, -2, -1, -2, -1, -2, -2,  2, -3,  0,  0, -1, -4],
[-1, -3, -3, -3, -1, -3, -3, -4, -3,  4,  2, -3,  1,  0, -3, -2, -1, -3, -1,  3, -3, -3, -1, -4],
[-1, -2, -3, -4, -1, -2, -3, -4, -3,  2,  4, -2,  2,  0, -3, -2, -1, -2, -1,  1, -4, -3, -1, -4],
[-1,  2,  0, -1, -3,  1,  1, -2, -1, -3, -2,  5, -1, -3, -1,  0, -1, -3, -2, -2,  0,  1, -1, -4],
[-1, -1, -2, -3, -1,  0, -2, -3, -2,  1,  2, -1,  5,  0, -2, -1, -1, -1, -1,  1, -3, -1, -1, -4],
[-2, -3, -3, -3, -2, -3, -3, -3, -1,  0,  0, -3,  0,  6, -4, -2, -2,  1,  3, -1, -3, -3, -1, -4],
[-1, -2, -2, -1, -3, -1, -1, -2, -2, -3, -3, -1, -2, -4,  7, -1, -1, -4, -3, -2, -2, -1, -2, -4],
[ 1, -1,  1,  0, -1,  0,  0,  0, -1, -2, -2,  0, -1, -2, -1,  4,  1, -3, -2, -2,  0,  0,  0, -4],
[ 0, -1,  0, -1, -1, -1, -1, -2, -2, -1, -1, -1, -1, -2, -1,  1,  5, -2, -2,  0, -1, -1,  0, -4],
[-3, -3, -4, -4, -2, -2, -3, -2, -2, -3, -2, -3, -1,  1, -4, -3, -2, 11,  2, -3, -4, -3, -2, -4],
[-2, -2, -2, -3, -2, -1, -2, -3,  2, -1, -1, -2, -1,  3, -3, -2, -2,  2,  7, -1, -3, -2, -1, -4],
[ 0, -3, -3, -3, -1, -2, -2, -3, -3,  3,  1, -2,  1, -1, -2, -2,  0, -3, -1,  4, -3, -2, -1, -4],
[-2, -1,  3,  4, -3,  0,  1, -1,  0, -3, -4,  0, -3, -3, -2,  0, -1, -4, -3, -3,  4,  1, -1, -4],
[-1,  0,  0,  1, -3,  3,  4, -2,  0, -3, -3,  1, -1, -3, -1,  0, -1, -3, -2, -2,  1,  4, -1, -4],
[ 0, -1, -1, -1, -2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -2,  0,  0, -2, -1, -1, -1, -1, -1, -4],
[-4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4,  1],
]


# return match or mismatch score


def _match(s, t, i, j):
    index1 = amino.index(t[i-1])
    index2 = amino.index(s[j-1])
    return blosum[index1][index2]

# initializers for matrices


def _init_x(i, j):
    if i > 0 and j == 0:
        return MIN
    else:
        if j > 0:
            return S + E * j
        else:
            return 0


def _init_y(i, j):
    if j > 0 and i == 0:
        return MIN
    else:
        if i > 0:
            return S + E * i
        else:
            return 0


def _init_m(i, j):
    if j == 0 and i == 0:
        return 0
    else:
        if j == 0 or i == 0:
            return MIN
        else:
            return 0


def distance_matrix(s, t):
    dim_i = len(t) + 1
    dim_j = len(s) + 1
    # abuse list comprehensions to create matrices
    X = [[_init_x(i, j) for j in range(0, dim_j)] for i in range(0, dim_i)]
    Y = [[_init_y(i, j) for j in range(0, dim_j)] for i in range(0, dim_i)]
    M = [[_init_m(i, j) for j in range(0, dim_j)] for i in range(0, dim_i)]

    for j in range(1, dim_j):
        for i in range(1, dim_i):
            X[i][j] = max((S + E + M[i][j-1]), (E + X[i][j-1]))
            Y[i][j] = max((S + E + M[i-1][j]), (E + Y[i-1][j]))
            M[i][j] = max(_match(s, t, i, j) + M[i-1][j-1], X[i][j], Y[i][j])
    return [X, Y, M]


def backtrace(s, t, X, Y, M):
    sequ1 = ''
    sequ2 = ''
    i = len(t)
    j = len(s)
    while (i > 0 or j > 0):
        if (i > 0 and j > 0 and M[i][j] == M[i-1][j-1] + _match(s, t, i, j)):
            sequ1 += s[j-1]
            sequ2 += t[i-1]
            i -= 1
            j -= 1
        elif (i > 0 and M[i][j] == Y[i][j]):
            sequ1 += '_'
            sequ2 += t[i-1]
            i -= 1
        elif (j > 0 and M[i][j] == X[i][j]):
            sequ1 += s[j-1]
            sequ2 += '_'
            j -= 1

    sequ1r = ' '.join([sequ1[j] for j in range(-1, -(len(sequ1)+1), -1)])
    sequ2r = ' '.join([sequ2[j] for j in range(-1, -(len(sequ2)+1), -1)])

    return [sequ1r, sequ2r]