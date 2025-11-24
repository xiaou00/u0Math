#代数 #环论 

>[!definition] 互素
>若[[环]]$R$的[[理想]]$I,J$满足$I+J=R$, 则称$I,J$**互素**(coprime).

>[!theorem] Bézout定理 (Bézout Theorem)
>设$R$是有单位元1的环, 则$I,J$互素当且仅当$1\in I+J$.

>[!proof]
>必要性. 由$R=I+J$可知$1\in R$可以表示为一个$I$中元素与一个$J$中元素的和, 这就证明了必要性.
>
>充分性. 若存在$a\in I,b\in J$使得$a+b=1$, 由于$I,J$是理想, 因此$\forall r\in R$有
>$$r=r\cdot 1=r(a+b)=ra+rb$$
>由于$a\in I$, 由理想的吸收性得$ra\in I$, 同理$rb\in J$.
>因此任意$r\in R$都可以表示成$ra\in I$和$rb\in J$的和, 即$R\subset I+J$.
>
>显然有$I+J\subset R$, 这就证明了$I+J=R$.

>[!theorem] Bézout定理, 经典形式 (Bézout Theorem, classical version)
>若$a,b\in\Z$, $\gcd(a,b)=1\iff\exists n,m\in\Z(na+mb=1)$.

>[!corollary]  引理1
>设$R$是由单位元1的环, $I,J,K$都是$R$的理想, 如果$I,J$都与$K$互素, 那么$IJ$与$K$互素.

>[!proof]
>由于$I+K=R,J+K=R$, 由Bézout定理, 存在$a\in I,k_1\in K,b\in J,k_2\in K$使得
>$$a+k_1=1,\quad b+k_2=1$$
>
>将上述两式相乘得
>
$$ab+(ak_2+k_1b+k_1k_2)=1$$
由于$K$是$R$的理想, 因此$ak_2+k_1b+k_1k_2\in K$. 而$ab\in IJ$, 因此$1\in IJ+K$, 由Bézout定理就证明了$IJ+K=R$.

>[!corollary] 引理2
>设$R$是有单位元的交换环, $I,J$是$R$的理想, 则
>$$I+J=R\Longrightarrow IJ=I\cap J$$

>[!proof]
>已经知道$IJ\subset I\cap J$. 因此只需要证明$I\cap J\subset IJ$. 因为$I+J=R$, 由Bézout定理, 存在$a\in I, b\in J$使得
>$$a+b=1$$
>
>任取$x\in I\cap J$, 用$x$乘上式两边得
>$$xa+xb=x$$
>
>由于$R$是交换环, 因此$xa=ax$, 从而
>$$x=ax+xb\in IJ$$
>
>于是$I\cap J\subset IJ$, 因此$IJ=I\cap J$.

