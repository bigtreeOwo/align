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
  本项目采用前端<font color=red>html</font>和<font color=red>pyscript</font>后端代码，使用<font color=red>Node.js</font>搭建web服务。python版本为3.11.2，Node.js版本为18.16.0。需要安装python的pyscript库和Node.js的express模块。

建议使用vscode打开align文件，<font color=red>在终端中使用dos命令cd切换目录到./align</font>，输入

安装python的pyscript库

```python
pip insstall pyscript
```

  安装Node.js的express模块

```
npm install express
```

启动web服务

```node.js
node Server.js
```

启动web服务器，在浏览器中输入<font color=red>localhost:9090</font>访问页面（在Server.js中设置的端口为9090，可以自行更改）。



# 使用方法

###### <font color='red'>打开页面后需要等待3到5秒使pyscript完全加载 </font>

​	在longSeq中输入长蛋白质序列，在short中输入短蛋白质序列。点击submit输出对比结果，点击reset清除输出的结果，点击blastonline可以打开内嵌网页在线输入序列查看结果(<font color='red'>加载速度较慢，请耐心等待</font>)。
