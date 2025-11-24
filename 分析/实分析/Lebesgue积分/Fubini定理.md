#分析 

>[!theorem] Fubini定理
>设有限[[测度空间]]$(X,\mc A,\mu)$和$(Y,\mc B,\nu)$, 则积测度空间$X\times Y$中, 若$X\in\mc A$, $Y\in\mc B$, 则$f\in \ms{L}^1(X\times Y)$的[[Lebesgue积分]]满足:
>$$\int_{X\times Y}{f\,\d(\mu\otimes\nu)}=\int_X{\left(\int_Y{f\,\d\nu}\right)\,\d\mu}=\int_Y{\left(\int_X{f\,\d\mu}\right)\,\d\nu}$$

>[!proof]
>我们先证明原定理对[[特征函数]]成立, 任取$\chi_{A\times B}$, 其中$A\in\mc A,B\in\mc B$. 则
>$$\int_{X\times Y}{\chi_{A\times B}\,\d(\mu\otimes\nu)}=(\mu\otimes\nu)(A\times B)=\mu(A)\cdot\nu(B)$$
>同时
>$$\int_X{\left(\int_Y{\chi_{A\times B}(x,y)\,\d\nu(y)}\right)\,\d\mu(x)}=\int_X{\left(\int_Y{\chi_A(x)\chi_B(y)\,\d\nu(y)}\right)\,\d\mu(x)}\tag{I}$$
>当$x\in A$时, $\chi_A(x)=1$, 从而内部的积分为
>$$\int_Y{\chi_B\,\d\nu}=\nu(B)$$
>当$x\notin A$时, $\chi_A(x)=0$, 从而内部的积分为$0$, 因此, 内部积分的结果为$\nu(B)\cdot \chi_A(x)$, 再对(I)积分:
>$$\int_X{\nu(B)\cdot\chi_A(x)\,\d\mu}=\nu(B)\cdot\mu(A)$$
>于是原定理对特征函数成立. 下面证明对[[简单函数]]成立, 则
>$$s=\sum_{i=1}^n{c_i\chi_{E_i}}$$
>其中对于每个$i$, $c_i\ge 0$, $E_i\in\mc A\otimes\mc B$且两两无交. 显然我们可以固定$x$, 然后规定
>$$\phi_y(x)=\int_Y{s(x,y)\,\d\nu}(x)=\sum_{i=1}^n{c_i\int_Y{\chi_{E_i}|_{(x,\cdot)}\,\d\nu}}$$
>(将后面视为积分的一个"切片"), 于是
>$$\begin{aligned}&\int_{X\times Y}{s\,\d(\mu\otimes\nu)}=\sum_{i=1}^n{c_i\int_{X\times Y}{\chi_{E_i}\,\d(\mu\otimes\nu)}}=\sum_{i=1}^n{c_i\int_X{\left(\int_Y{\chi_{E_i}\,\d\nu}\right)\,\d\mu}}\\=&\int_X{\left(\sum_{i=1}^n{c_i\int_Y{\chi_{E_i}\,\d\nu}}\right)\,\d\mu}=\int_X{\left(\sum_{i=1}^n{c_i\int_Y{\chi_{E_i}|_{(x,\cdot)}(y)\,\d\nu}(y)}\right)\,\d\mu}(x)=\int_X{\phi_y\,\d\mu}=\int_X{\left(\int_Y{s\,\d\nu}\right)\,\d\mu}\end{aligned}$$
>从而对于每个简单函数成立, 下面我们证明对于非负可测函数成立, 我们选择应用多次[[单调收敛定理|MCT]], 
>$$\begin{aligned}&\int_{X\times Y}{f\,\d(\mu\otimes\nu)}=\lim_{n\to\infty}{\int_{X\times Y}{s_n\,\d(\mu\otimes\nu)}}=\lim_{n\to\infty}{\int_X{\left(\int_Y{s_n\,\d\nu}\right)\,\d\mu}}\\=&\int_X{\left(\lim_{n\to\infty}{\int_Y{s_n\,\d\nu}}\right)\,\d\mu}=\int_X{\left(\int_Y{\lim_{n\to\infty}{s_n}\,\d\nu}\right)\,\d\mu}=\int_X{\left(\int_Y{f\,\d\nu}\right)\,\d\mu}\end{aligned}$$
>从而非负函数的情况得证. 对称地容易证明另一种情况($\int_Y\int_X$). 分解成正负部分容易证明对于可积的实函数成立.

