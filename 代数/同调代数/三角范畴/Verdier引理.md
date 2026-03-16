#代数 

>[!thm] Verdier引理
>[[三角范畴]] $\mathfrak D$ 中的任意交换图表
>```tikz
\usepackage{tikz-cd} \begin{document} \Large\begin{tikzcd}[cramped,row sep=large] X & Y \\ {X'} & {Y'} \arrow["f", from=1-1, to=1-2] \arrow["u", from=2-1, to=1-1] \arrow["{f'}"', from=2-1, to=2-2] \arrow["v"', from=2-2, to=1-2] \end{tikzcd} \end{document}
>```
>皆能扩充为图表
>```tikz
\usepackage{tikz-cd} \usepackage{amssymb} \begin{document} \Large \begin{tikzcd}[cramped,row sep=large] {TX'} & {TY'} & {TZ'} & {T^2X'} \\ {X''} & {Y''} & {Z''} & {TX''} \\ X & Y & Z & TX \\ {X'} & {Y'} & {Z'} & {TX'} \arrow["{Tf'}", from=1-1, to=1-2] \arrow["{Tg'}", from=1-2, to=1-3] \arrow["{-Th'}", from=1-3, to=1-4] \arrow["o", from=2-1, to=1-1] \arrow["{f''}", from=2-1, to=2-2] \arrow["p", from=2-2, to=1-2] \arrow["{g''}", from=2-2, to=2-3] \arrow["q", from=2-3, to=1-3] \arrow["\circlearrowleft"{marking}, draw=none, from=2-3, to=1-4] \arrow["{h''}", from=2-3, to=2-4] \arrow["{-To}"', from=2-4, to=1-4] \arrow["r", from=3-1, to=2-1] \arrow["f", from=3-1, to=3-2] \arrow["s", from=3-2, to=2-2] \arrow["g", from=3-2, to=3-3] \arrow["t", from=3-3, to=2-3] \arrow["h", from=3-3, to=3-4] \arrow["Tr"', from=3-4, to=2-4] \arrow["u", from=4-1, to=3-1] \arrow["{f'}"', from=4-1, to=4-2] \arrow["v", from=4-2, to=3-2] \arrow["{g'}"', from=4-2, to=4-3] \arrow["w", from=4-3, to=3-3] \arrow["{h'}"', from=4-3, to=4-4] \arrow["Tu"', from=4-4, to=3-4] \end{tikzcd} \end{document}
>```
>使得每行每列都是好三角, 且标注 $\circlearrowleft$ 的方块反交换, 即 $(To)h''=-(Th')q$, 其余方块交换.

>[!pf]
>首先对 $u,v,f,f'$ 应用 *TR2*, 立即得到图表的
>```tikz
\usepackage{tikz-cd} \begin{document} \Large \begin{tikzcd}[cramped,row sep=2.25em] \bullet & \bullet \\ \bullet & \bullet \\ \bullet & \bullet & \bullet & \bullet \\ \bullet & \bullet & \bullet & \bullet \arrow[from=2-1, to=1-1] \arrow[from=2-2, to=1-2] \arrow[from=3-1, to=2-1] \arrow[from=3-1, to=3-2] \arrow[from=3-2, to=2-2] \arrow[from=3-2, to=3-3] \arrow[from=3-3, to=3-4] \arrow[from=4-1, to=3-1] \arrow[from=4-1, to=4-2] \arrow[from=4-2, to=3-2] \arrow[from=4-2, to=4-3] \arrow[from=4-3, to=4-4] \end{tikzcd} \end{document}
>```
>部分, 使得每行每列都是好三角, 其次对 $fu=vf':X'\to Y$ 应用 *TR2* 给出一个好三角
>$$X\to Y\xto{m}A\xto{n}TX'$$
>下面的构造基于八面体公理 *TR5*.
>```tikz
\usepackage{tikz-cd} \begin{document} \Large\begin{tikzcd}[cramped,row sep=large] {X'} & {Y'} & {Z'} & {TX'} \\ {X'} & Y & A & {TX'} \\ {Y'} & Y & {Y''} & {TY'} \\ {Z'} & A & {Y''} & {TZ'} \\ & {} & {}\arrow["{f'}", from=1-1, to=1-2] \arrow[equal, from=1-1, to=2-1] \arrow["{g'}", from=1-2, to=1-3] \arrow["v"', from=1-2, to=2-2] \arrow["{h'}", from=1-3, to=1-4] \arrow["i", from=1-3, to=2-3] \arrow[equal, from=1-4, to=2-4] \arrow["{vf'}", from=2-1, to=2-2] \arrow["{f'}"', from=2-1, to=3-1] \arrow["m", from=2-2, to=2-3] \arrow[equal, from=2-2, to=3-2] \arrow["n", from=2-3, to=2-4] \arrow["j", from=2-3, to=3-3] \arrow["{Tf'}", from=2-4, to=3-4] \arrow["v"', from=3-1, to=3-2] \arrow["{g'}"', from=3-1, to=4-1] \arrow["s"', from=3-2, to=3-3] \arrow["m"', from=3-2, to=4-2] \arrow["p"', from=3-3, to=3-4] \arrow[equal, from=3-3, to=4-3] \arrow["{Tg'}", from=3-4, to=4-4] \arrow["i"', from=4-1, to=4-2] \arrow["j"', from=4-2, to=4-3] \arrow["k"', from=4-3, to=4-4] \arrow["{\mathrm{Fig\,(\,I\,)}}", draw=none, from=5-2, to=5-3]\end{tikzcd} \end{document}
>```
>最后一行是新构造的好三角.
>对于包含 $u,f,fu$ 的好三角应用八面体公理 *TR5* , 得到图
>```tikz
\usepackage{tikz-cd} \begin{document} \Large \begin{tikzcd}[cramped,row sep=large] {X'} & X & X & {TX'} \\ {X'} & Y & A & {TX'} \\ X & Y & Z & TX \\ {X'} & {Y'} & {Z'} & {TX'} \\ & {} & {} \arrow["u", from=1-1, to=1-2] \arrow["r", from=1-2, to=1-3] \arrow["f"', from=1-2, to=2-2] \arrow["o", from=1-3, to=1-4] \arrow["a", from=1-3, to=2-3] \arrow[equal, from=2-1, to=1-1] \arrow["fu", from=2-1, to=2-2] \arrow["u"', from=2-1, to=3-1] \arrow["m", from=2-2, to=2-3] \arrow["n", from=2-3, to=2-4] \arrow["b", from=2-3, to=3-3] \arrow[equal, from=2-4, to=1-4] \arrow["Tu", from=2-4, to=3-4] \arrow["f"', from=3-1, to=3-2] \arrow["r"', from=3-1, to=4-1] \arrow[equal, from=3-2, to=2-2] \arrow["g"', from=3-2, to=3-3] \arrow["m"', from=3-2, to=4-2] \arrow["h"', from=3-3, to=3-4] \arrow["Tr", from=3-4, to=4-4] \arrow["a"', from=4-1, to=4-2] \arrow["b"', from=4-2, to=4-3] \arrow[equal, from=4-3, to=3-3] \arrow["c"', from=4-3, to=4-4] \arrow["{\mathrm{Fig\,(\,II\,)}}", draw=none, from=5-2, to=5-3] \end{tikzcd} \end{document}
>```
>对 $f''=ja:X''\to Y''$ 应用 *TR2* 得好三角
>$$X''\xto{f''}Y''\xto{g''}Z''\xto{h''}TX''$$
>再由 *TR3* 旋转得好三角
>$$\begin{matrix}
X''\xto aA\xto bZ\xto cTX'',\quad A\xto jY''\xto kTZ'\xto{-Ti}TA\\
X''\xto{f''=ja}Y''\xto{g''}Z''\xto{h''}TX''
\end{matrix}$$
>应用八面体公理 *TR5* 得到图表
>```tikz
\usepackage{tikz-cd} \begin{document} \Large\begin{tikzcd}[cramped,row sep=large] {X''} & A & Z & {TX''} \\ {X''} & {Y''} & {Z''} & {TX''} \\ A & {Y''} & {TZ'} & TA \\ Z & {Z''} & {TZ'} & TZ \\ & {} & {} \arrow["a", from=1-1, to=1-2] \arrow[equals, from=1-1, to=2-1] \arrow["b", from=1-2, to=1-3] \arrow["j", from=1-2, to=2-2] \arrow["c", from=1-3, to=1-4] \arrow["t", from=1-3, to=2-3] \arrow[equals, from=1-4, to=2-4] \arrow["{{f''}}", from=2-1, to=2-2] \arrow["a"', from=2-1, to=3-1] \arrow["{{g''}}", from=2-2, to=2-3] \arrow[equals, from=2-2, to=3-2] \arrow["{{h''}}", from=2-3, to=2-4] \arrow["q", from=2-3, to=3-3] \arrow["Ta", from=2-4, to=3-4] \arrow["j", from=3-1, to=3-2] \arrow["b"', from=3-1, to=4-1] \arrow["k", from=3-2, to=3-3] \arrow["m", from=3-2, to=4-2] \arrow["{{-Ti}}", from=3-3, to=3-4] \arrow[equals, from=3-3, to=4-3] \arrow["Tb", from=3-4, to=4-4] \arrow["t"', from=4-1, to=4-2] \arrow["q"', from=4-2, to=4-3] \arrow["l"', from=4-3, to=4-4] \arrow["{\mathrm{Fig\,(\,III\,)}}", draw=none, from=5-2, to=5-3] \end{tikzcd} \end{document}
>```
>最后一行是新构造的好三角, 令 $w=bi$, (III) 交换蕴含 $l=-Tw$, 从而旋转出好三角
>$$Z'\xto wZ\xto tZ''\xto qTZ'$$
>上述操作给出所求图表的第二列和第三列, 剩余第一行 (第四列) 是第四行 (第一列) 按 *TR3* 旋转的产物, 从而也是好三角. 容易验证剩下的交换性是显然的.
