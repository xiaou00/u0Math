#代数几何 

>[!def] $\Spec$ 函子
>设 $R$ 是[[环|交换环]], 其[[素谱]]为 $\Spec(R)$. 对于 $R$ 的任一[[理想]] $I$, 定义其对应的零点集 $V(I)$ 为包含 $I$ 的全体素理想的集合,
>$$V(I)=\set{\mathfrak p\in\Spec(R)\mid S\subset\mathfrak p}$$
>规定 $\Spec(R)$ 上的**Zariski拓扑**(Zariski topology)下的闭集就是全体形如 $V(I)$ 的集合. 这构成了反变函子
>$$\Spec:\mathsf{CRng}\to\mathsf{Top}$$
>为了避免混淆, 很多时候为了表示 $\mathfrak p$ 是 $\Spec (R)$ 的元素会记作 $[\mathfrak p]$. 环中的元素 $r\in R$ 称做 $\Spec(R)$ 上的**函数**. 它们在 $[\mathfrak p]$ 的取值为 $a\pmod{\mathfrak{p}}$.

代码验证如下:

```python
R.<x,y>=QQ[] # 多项式环
P=R.ideal([x-1,y-2]) # 素理想 (x-1,y-2)
F=x^2+y-1 # R[x,y] 中多项式(环元素)
print(f.reduce(P)) # 输出2
```

显然可以验证每一条拓扑空间公理都是成立的:

- $V(R)=\O, V(0)=\Spec(R)$.
- $V(I)\cup V(J)= V(IJ)=V(I\cap J)$.
- $\bigcap_\alpha{V(I_\alpha)}=V\left(\sum_\alpha{I_\alpha}\right)$.

从而其确实构成拓扑空间, 并且 $\Spec$ 满足函子性.

上面关于函数的定义看上去确实很怪异: 同一个函数在不同的点处取值也可以属于不同的环. 例如 $\Spec(\Z)$ 上的函数 $5$, 在 $[\langle 2\rangle]$ 处取值为 $1\pmod{2}$, 在 $[\langle 3\rangle]$ 处取值为 $2\pmod{3}$.

**核心直觉1** 环中一个元素 $r$ 包含在素理想 $\mathfrak p$ 中 <--> 函数 $r$ 在 $[p]$ 处取为 $0$.
**核心直觉2** 两个函数相加或相乘 <--> 在所有点处将取值相加或相乘. (本质上是 $R\to R/\mathfrak p$ 作为同态)

---

例如, 对于 $\Spec(\C[x])$. 我们来确定 $\C[x]$ 的全部素理想, 由于 $\C[x]$ 是[[环|整环]], $\langle 0\rangle$ 是素理想, 并且对任意 $a\in\C$, $\langle x-a\rangle$ 也是素理想. 并且因为下列正合
$$0\to\langle x-a\rangle\to\C[x]\xto{f\mapsto f(a)}\C\to 0$$
从而该理想的商环是域, 他甚至说极大理想. 由 $\C[x]$ 的性质可以证明其不存在其他素理想.

再考虑复仿射直线 $\mathbb A_\C^1$, 这时我们惊讶地发现代数-几何有精妙的对偶关系: 对于每个 $\C[x]$ 的素理想, 我们都一一对应了 $\mathbb A_\C^1$ 的一个点 (对于 $\langle  0\rangle$ 其对应的为一个"无处不在"的点).
$$\begin{aligned}
\Spec(\C[x])&\overset{1:1}\longrightarrow\mathbb A_\C^1\cup\set{\mathrm{generic}}\\
\langle 0\rangle&\longmapsto\mathrm{generic}\\
\langle x-a\rangle&\longmapsto a\\
\end{aligned}$$
合适地赋予拓扑后 ([[Zariski拓扑]]加上泛点), 上述映射是同胚. 类似地, $\C[x]$ 中的极大理想也一一对应了 $\C$ 中的点 $\langle x-a\rangle\mapsto a$.

这个结论可以合适地推广到任何代数闭域和任何元多项式, 注意多元多项式时泛点可能会有多个呈层级分布.

在这个例子中, 我们所定义的环元素就是多项式函数, 函数 $f(x)$ 在点 $\mathfrak p\in\Spec(\C[x])$ 处取值为 $f(x)\pmod{\mathfrak p}$, 例如 $f(x)=x^2+1$, 在 $\langle x-1\rangle$ 处取值为 $2\pmod{\langle x-1\rangle}$, 在 $\langle x-\i\rangle$ 处取值为 $0\pmod{\langle x-\i\rangle}$, 在 $\langle 0\rangle$ 处取值为 $z^2+1\pmod{\langle 0\rangle}$. 

这个结果正是余数定理的体现.

---

不妨考虑 $\Spec(\Z)$. 其所有理想都形如 $\langle p\rangle$ 或 $\langle  0\rangle$. 我们还能将函数的概念延拓到这个层面上: 函数 $n\in\Z$ 在 $[\langle p\rangle]$ 处取值为 $n\pmod{p}$, 在 $[\langle 0\rangle]$ 处取值为 $n\pmod{0}$. 

这时我们就可以将 $\Spec(\Z)$ 看做是一个由所有素数和一个泛点组成的空间, 其中每个素数 $p$ 都是一个点, 泛点 $\langle 0\rangle$ 则是一个"无处不在"的点. 这个空间的拓扑结构是: 每个素数 $p$ 都是一个闭点, 泛点 $\langle 0\rangle$ 则是一个非闭点, 其闭包为 $\Spec(\Z)$.

我们容易验证Spec上的下面两条性质

>[!thm] 定理1
>$\Spec(R/I)$ 是 $\Spec(R)$ 的一个子集, 其元素为包含 $I$ 的素理想. 反过来, $\Spec(R)$ 的每个包含 $I$ 的素理想都对应 $\Spec(R/I)$ 的一个元素.

>[!thm] 定理2
>设 $S$ 是 $R$ 的[[乘法封闭子集]], $\Spec(S^{-1}R)$ 是 $\Spec(R)$ 的子集.

