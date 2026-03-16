#奇技淫巧
###### 前置
- [[Yoneda引理]], [[全函子]], [[忠实函子]].

Yoneda引理有个非常重要的结论, 那就是任何范畴 $\mc C$ 都能全忠实地嵌入到[[函子范畴]] $\mathsf{Fct}(\mc C^{\mathrm{op}},\mathsf{Set})$ 中. 这有一个很深刻的哲学含义, 类似于**我知道你的所有朋友, 那么我就知道你是谁**的关系, 从范畴论的角度我们不喜欢拆解对象的内部结构, 而Yoneda嵌入就可以通过它在范畴中的表现断言很多事情.

>[!tip] 技巧一. 通过 $\Hom(A,-)\simeq\Hom(B,-)$ 推出 $A\simeq B$
>可以这么做是由Yoneda引理所保证的. 因为若有自然同构 (函子范畴的同构) $\alpha:h^A\xto\sim h^B$. (这里简写了) 那么我们可以构造 $f,g$ 态射, 满足:
>- 分量 $\alpha_A:\Hom(A,A)\to\Hom(B,A)$ 是集合的双射, 取 $f=\alpha_A(\mathbb 1_A)$ 则 $f:B\to A$.
>- 类似地利用逆变换 $\alpha^{-1}$ (因为它是函子同构), 我们也可以取 $g:B\to A$ 为 $g=\alpha^{-1}_B(\mathbb 1_B)$.
>
>由自然变换的交换图表容易验证他们互逆, 于是 $A,B$ 同构**.**

**应用举例** 伴随函子的唯一性证明. 设 $G:\mc D\to\mc C$ 有两个伴随函子 $F_1,F_2:\mc C\to\mc D$. 由[[伴随函子]]的定义,
$$\begin{aligned}
\Hom_{\mc D}(F_1(A),X)\simeq\Hom_{\mc C}(A,G(X))\\
\Hom_{\mc D}(F_2(A),X)\simeq\Hom_{\mc C}(A,G(X))
\end{aligned}$$
利用同构的传递性立即得到, 对于固定 $A$ 和任意 $X$, 
$$\Hom_{\mc D}(F_1(A),X)\simeq
\Hom_{\mc D}(F_2(A),X)$$
这就是函子同构
$$\Hom_{\mc D}(F_1(A),-)\simeq\Hom_{\mc D}(F_2(A),-)$$
从而 $F_1(A)\simeq F_2(A)$ 对任意 $A$ 成立, 于是函子间有同构 $F_1\simeq F_2$.

观察上述过程, 我们可以给出更加好用的形式, 我们可以定义任意的**观察者** (我自己起的名字)去观察这两个对象的行为, 再去通过自然性推敲同构:

>[!tip] 技巧二. 对任意 $Z$, $\Hom(A,Z)\simeq\Hom(B,Z)$ 且变换对 $Z$ 自然, 推出 $A\simeq B$.

**练习** 设 $\mc C$ 存在积, $A,B$ 是其任给的对象, 证明 $A\times B\simeq B\times A$.

**证明** 给定观察者 $Z$, 写出
$$\Hom(Z,A\times B)\simeq\Hom(Z,A)\times\Hom(Z,B)$$
这是积的泛性质确保的, 并且集合的Cartesian积交换, 重新组合得
$$\Hom(Z,A\times B)\simeq\Hom(Z,A)\times\Hom(Z,B)\simeq\Hom(Z,B)\times\Hom(Z,A)\simeq\Hom(Z,B\times A)$$
这对任何 $Z$ 成立, 并且它是自然的, 若通过 $Z\to Z'$ 改变观察点, 由图表容易验证. 综上可得 $A\times B\simeq B\times A$.

**注意** 上面的技巧反之亦然成立, 因此是充要条件.
