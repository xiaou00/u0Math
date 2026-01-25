#代数拓扑 

一种常见的构造环面的方法是, 将 $I^2$ 的对边粘合起来. (参考[[商拓扑]])
```tikz
\usepackage{pgfplots}
\pgfplotsset{
    /pgfplots/colormap={cold}{rgb255=(0,20,20) rgb255=(0,80,160) rgb255=(0,180,240)
        rgb255=(0,255,255)}
}
\def\R{4}
\def\r{2}
\begin{document}
\begin{tikzpicture}[scale=0.6]
    \begin{axis}[
        colormap name=cold,
        axis equal,
        axis lines=none,
        shader=flat,
    ]
    \addplot3[
        surf,
        domain=-pi:pi,
        domain y=-pi:pi,
        z buffer=sort,
        samples=18,
        samples y=18
    ]({(\R+\r*cos(deg(x)))*cos(deg(y))},
    {(\R+\r*cos(deg(x)))*sin(deg(y))},
    {\r*sin(deg(x))});
    \end{axis}
\end{tikzpicture}
\end{document}
```
在这一过程中, 我们将 $I^2$ 的内部视为开圆盘 (同胚意义下), 即**2-胞腔**(2-cell). 他被附着在两个圆的并集上. 而这些圆则可以看作从两个点出发, 附着两条开弧, 即**1-胞腔**(1-cell)得到的. 我们发现曲面可以分阶段构造: 从点开始, 附着1-胞腔, 然后附着2-胞腔. 受此启发, 我们有如下定义:

>[!def] CW复形
>我们采用[[归纳定义原理]]对该概念进行定义. 归纳步骤如下:
>1. 首先定义0-骨架 $X^0$ 是赋予了[[离散拓扑]]的集合, 该集合中的点视为**0-胞腔**(0-cell).
>2. 归纳地, 通过**附着映射**(attaching map) $\phi_\alpha:\p\mathbb D^n\cong\mathbb S^{n-1}\to X^{n-1}$, 将 $n$-胞腔 $e^n_\alpha$ 附着到 $X^{n-1}$ 上, 形成$n$-骨架 $X^n$. 这意味着 $X^n$ 是[[无交并拓扑]] $X^{n-1}\bigsqcup_\alpha\mathbb D^n_\alpha$ 在对于每个 $x\in\p\mathbb D^n_\alpha$, $x\sim\phi_\alpha(x)$ 意义下的[[商拓扑]]. (作为一个集合, $X^n=X^{n-1}\bigsqcup_\alpha e^{n}_\alpha$, 其中每个 $e^n_\alpha$ 是开$n$-盘).
>3. 归纳过程可以在有限阶段停止, 也可以无限进行, 即令 $X=\bigcup_{n=1}^\infty X^n$. 后者将被赋予**弱拓扑**(weak topology): $A\subset X$ 是开集当且仅当对每个 $n$, $A\cap X^n$ 是 $X^n$ 中开集.
>
>一个空间若能用上述过程构造, 则称为一个**胞腔复形**(cell complex)或**CW复形**(CW complex).
>若定义 $X=X^n$ 在有限阶段停止, 则称之为有限维的, 称 $n$ 是该CW复形的**维数**. 若CW复形的每个骨架都由有限个胞腔合成, 则称该CW复形是**有限的**.

※CW的含义是Closure-finite, Weak-topology.

上述定义可能有些抽象, 不过我们可以从几个实例入手.

>[!ex] 图
>代数拓扑学中, 图被定义为1-CW复形. 每个1-胞腔 (边) 的边界同胚于0-球 $\mathbb S^0$, 也就是两个端点, 附着映射指定了附着的位置 (将待定端点对应到现成的端点).

注意同胚意义下不同的CW复形被构造的方式也不一定唯一.

>[!def] 特征映射
>设CW复形 $X$ 的全体胞腔 $\set{e_\alpha^n}$, 每个 $e_\alpha^n$ 都对应一个**特征映射**(characteristic map) $\Phi_\alpha:\mathbb D^n_\alpha\to X$ 是附着映射 $\phi_\alpha$ 的延拓, 并且在 $\mathbb D^{n,\circ}_\alpha$ 上是同胚 $\mathbb D^{n,\circ}_\alpha\xrightarrow{\sim}e_\alpha^n$.

具体来说, 我们可以将 $\Phi_\alpha$ 视为复合
$$\mathbb D^n_\alpha\hookrightarrow X^{n-1}\sqcup_\alpha\mathbb D^n_\alpha\xtwoheadrightarrow{\text{quot}} X^n\hookrightarrow X$$
中间的映射是定义 $X^n$ 的商映射.

