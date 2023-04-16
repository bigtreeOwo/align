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

# 环境搭建

此版本只使用html、css、javascript搭建的界面。

# 使用方法

 在longSeq中输入长蛋白质序列，在short中输入短蛋白质序列。点击submit输出对比结果，点击reset清除输出的结果，点击blastonline可以打开内嵌网页在线输入序列查看结果(加载速度较慢，请耐心等待)。
