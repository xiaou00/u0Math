#范畴论 
$$\renewcommand{\ob}[1]{\operatorname{ob}{\mathfrak{#1}}}
\renewcommand{\mor}[1]{\operatorname{Mor}{\mathfrak{#1}}}
\renewcommand{\dom}[1]{\operatorname{dom}{#1}}
\renewcommand{\cod}[1]{\operatorname{cod}{#1}}
\newcommand{\sub}[1]{\operatorname{Sub}{(#1)}}
\newcommand{\quot}[1]{\operatorname{Quot}{(#1)}}$$
Yoneda(米田)引理, 可以说是范畴论中最具有深刻意义的结论之一了, 甚至带有些许哲学色彩. 它指出: 范畴中的对象由别的对象到它的态射决定. 这和社会学中"人是社会关系的总和"有异曲同工之妙.

>[!thm] Yoneda引理
>令$\frak C$是一个[[范畴]], 对任意$A\in\ob C$和函子$F:\frak C\to\sf Set$. 则关于$A$的[[Hom函子|Hom函子]]与对象(集合)$F(A)$有如下关系:
>$$\Hom_{\mathsf{Fct}}(\Hom_{\mathfrak C}(A,-),F)\simeq F(A)$$
>即存在同构(集合间的双射), 并且这个同构满足对于$A$是[[自然变换|自然同构]], 对于$F$也是自然同构.

>[!pf]
>我们先定义「$\hat\cdot$」 运算, 对任意$\eta\in[\mathfrak C(A,-),F]$, 定义$\hat\eta=\eta_A(1_A)$.
>>[!quote] 注
>>此处每个元素的定位如下:
>>1. $\eta$是自然变换集$[\mathfrak C(A,-),F]$的元素: $\eta:\mathfrak C(A,-)\Rightarrow F$是自然变换.
>>2. $\eta_X:\mathfrak C(A,X)\to F(X)$是映射(集合范畴$\sf Set$的态射).
>>3. $\eta_A:\mathfrak C(A,A)\to F(A)$是对象$A$到自身全体态射的集合, 到集合$F(A)$的映射.
>>4. $\eta_A(1_A)$是单位映射$1_A\in\mathfrak C(A,A)$在$F(A)$里的像.
>>
>>因此$\hat\cdot:[\mathfrak C(A,-),F]\to F(A)$.
>
>我们再定义「$\bar\cdot$」 运算, 对任意$x\in F(A)$, 定义$\bar x\in[\mathfrak{C}(A,-),F]$如下: 对任意$B\in\frak C$, $\bar x_B\in {\sf Set}(\mathfrak C(A,B), F(B))$. 对任意$f\in\mathfrak C(A,B)$, 定义$\bar x_B(f)=F(f)(x)$.
>>[!quote] 注
>>此处每个元素的定位如下:
>>1. $x\in F(A)$是集合的元素.
>>2. $\bar x$是$\mathfrak{C}(A,-)$到$F$的自然变换.
>>3. $\bar x_B$是$\mathfrak C(A,B)$到$F(B)$的态射($\sf Set$中的态射即映射).
>>
>>在最后的定义$\bar x_B(f)=F(f)(x)$中,
>>1. $F$是$\frak C\to\sf Set$的函子.
>>2. $f$是集合$\mathfrak C(A,B)$中的元素; **同时也是范畴中的一个态射**.
>>3. $F(f)$是$f$作为态射被映射到$\sf Set$中的一个态射(映射$F(A)\to F(B)$).
>>4. $F(f)(x)$是$x$在映射下的像. $F(f)(x)\in F(B)$.
>>
>>因此$\bar\cdot:F(A)\to[\mathfrak C(A,-),F]$
>
>下面我们分别证明$\bar\cdot\circ\hat\cdot=1_{[\mathfrak{C}(A,-),F]}$, $\hat\cdot\circ\bar\cdot=1_{F(A)}$.
>
>---
>I. 任取$\eta\in [\mathfrak C(A,-),F]$, 则
>$$\begin{aligned}&\bar{\hat{\eta}}_B(f)=F(f)(\hat\eta)=F(f)(\eta_A(1_A))=(F(f)\circ\eta_A)(1_A)\\=&(\eta_B\circ\mathfrak{C}(A,f))(1_A)=\eta_B(f\circ 1_A)=\eta_B(f)\end{aligned}$$
>其中, 倒数第三步用到的是自然变换的图表交换, 倒数第二步用的是Hom函子的定义.
>
>---
>II. 任取$x\in F(A)$, 则
>$$\hat{\bar x}=\bar x_A(1_A)=F(1_A)(x)=1_{F(A)}(x)=x$$
>
>---
>这就证明了$\bar\cdot\circ\hat\cdot=1_{[\mathfrak{C}(A,-),F]}$, $\hat\cdot\circ\bar\cdot=1_{F(A)}$. 因此$\hat{\cdot}$是同构(双射).

>[!cor] 推论1 (双Hom形式)
>$$\Hom_{\mathsf{Fct}}(\Hom(A,-),\Hom(B,-))\simeq\Hom(B,A)$$

这是Yoneda引理的一个重要本质, 即一个对象$A$可以通过所有从别的对象到它的态射来刻画.

>[!cor] 推论2 (Abel范畴)
>设$\frak A$是一个[[Abel范畴]], 则对任意$A,B\in\ob A$, 有自然同构
>$$\Ext^0(A,B)\simeq\Hom_{\frak A}(A,B)$$

>[!def] Yoneda嵌入
>给定范畴 $\mathfrak C$, **Yoneda嵌入** (Yoneda embedding) 是一个[[全函子|全]][[忠实函子]] $y:\mathfrak C\to\mathsf{Fct}(\mathfrak C^{\mathrm{op}},\mathsf{Set})$. 

Yoneda嵌入将每个对象 $A\in\ob C$ 映射为其对应的 Hom 函子 $\Hom_{\mathfrak C}(-,A)$, 并将每个态射 $f:A\to B$ 映射为自然变换 $\Hom_{\mathfrak C}(-,f):\Hom_{\mathfrak C}(-,A)\Rightarrow\Hom_{\mathfrak C}(-,B)$.

