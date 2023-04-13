# align
  这是一个生物信息学双序列比对程序。输入两条蛋白质序列，输出对比分数可对比结果。举例：
long sequence：EEEEEKKKKKAAAAAFFF
short sequence：EEEEEBBBBBFFF
  
输出结果为：
  Alignment Score:27
  E E E E E K K K K K A A A A A F F F
  E E E E E B B B B B _ _ _ _ _ F F F

  
  使用BLOSUM62矩阵来对序列中氨基酸符号的match和mismatch打分。
  使用动态规划的方法（Needleman-Wunsch算法）。
  计算空位的罚分时，使用仿射空位罚分策略，gap opening的分数为-11，gap extension的分数为-1。
  
