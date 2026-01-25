#分析 

下引理可视为[[Riesz表示定理]]的推广:

>[!thmx-Milgram引理
>设$\mc H$是Hilbert空间, $B(x,y):\mc H\times\mc H\to\C$是关于$x,y$的函数, 满足:
>1. 对于固定的$y$, $B(x,y)$是关于$x$的线性函数.
>2. 对于固定的$x$, $B(x,y)$是关于$y$的[[斜线性函数]].
>3. $B$有界, 即存在常数$c$使得对任意$x,y\in\mc H$有$$|B(x,y)|\le c\lVert{x}\rVert\cdot\lVert{y}\rVert$$
>4. 存在正数$b$使得$\forall y\in\mc H$, $$|B(y,y)|\ge b\lVert{y}\rVert^2$$
>
>**我们断言.** 对$\mc H$上每个有界[[线性泛函]]$\ell$, 在$\mc H$中存在唯一向量$y$使得$$\ell(x)=B(x,y),\forall y\in\mc H$$

>[!pf]
>由前三条, 对于固定的$y$, $B(x,y)$是有界线性泛函, 由[[Riesz表示定理]], 存在唯一的$z\in\mc H$使得
>$$B(x,y)=\langle x,z\rangle\tag{I}$$
>$z$由$y$唯一确定, 因此$z(y)$是关于$y$的函数. 由(I), $z$关于$y$是线性的, 因此当$y$取遍$\mc H$时, (I)中的$z(y)$构成的集合是$\mc H$的一个线性子空间. 我们断言它是闭的, 为此, 在(I)中取$x=y$有
>$$|B(y,y)|=\langle y,z\rangle$$
>对做的作用右端作用$|B(y,y)|\ge b\lVert{y}\rVert^2$, 对右端作用[[Cauchy-Schwarz不等式]]. 除以$\lVert{y}\rVert$, 我们得到
>$$b\norm y\le\lVert{z}\rVert\tag{II}$$
>设$\set{z_n}$是(I)中出现的一列向量, $y_n$是与$z_n$对应的向量:
>$$B(x,y_n)=\langle x,z_n\rangle\tag{III}$$
>从而$B(x,y_n-y_m)=\langle x,z_n-z_m\rangle$, 由(II)得 $b\norm{y_n-y_m}\le\norm{z_n-z_m}$. 由此可知若$\set{z_n}$收敛到$z$, 则对应的$\set{y_n}$是Cauchy列, 由于$\mc H$是完备的, $\set{y_n}$收敛到极限$y$. 由$B$有界性可知, (III)的左端收敛到$B(x,y)$, 由[[Cauchy-Schwarz不等式]], 右端收敛到$\langle x,z\rangle$. 从而
>$$B(x,y)=\langle x,z\rangle$$
>这就证明了(I)中出现的$z$构成的集合是闭子空间.
>我们断定这个闭子空间是整个$\mc H$, 否则由[[正交补|此页面定理1]], 存在非零向量$x$与所有$z$正交, 由(I)知对所有$y,x$满足$B(x,y)=0$, 令$y=x$即得$B(x,x)=0$, 由条件可得$x=0$, 与$x\ne 0$矛盾.
>由Riesz表示定理, 所有线性泛函$\ell(x)$都能表示为$\langle x,z\rangle$的形式, 结合(I)就证明了定理.

