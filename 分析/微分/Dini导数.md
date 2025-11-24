#分析 

>[!definition] Dini导数
>设$f(x)$是定义在$\R$的点$x_0$邻域上的实值函数, 令
>$$\D^+f(x_0)=\limsup_{h\to 0^+}{\frac{f(x_0+h)-f(x_0)}{h}}$$
>$$\D_+f(x_0)=\liminf_{h\to 0^+}{\frac{f(x_0+h)-f(x_0)}{h}}$$
>$$\D^-f(x_0)=\limsup_{h\to 0^-}{\frac{f(x_0+h)-f(x_0)}{h}}$$
>$$\D_-f(x_0)=\liminf_{h\to 0^-}{\frac{f(x_0+h)-f(x_0)}{h}}$$
>分别称为$f(x)$在$x_0$点的**左上导数**, **右下导数**, **左上导数**, **左下导数**. 统称为**Dini导数**(Dini derivative), 简称**Dini数**.

一个显然的性质是:
$$\D^+f(x_0)\ge\D_+f(x_0),\quad\D^-f(x_0)\ge\D_-f(x_0)$$
$$\D^+(-f)=-\D_+(f),\quad\D^-(-f)=-\D_-(f)$$
显然$f(x)$在$x_0$[[微分|可微]]当且仅当Dini数为同一个有限值.

>[!ex] 例1
>设$a<b$以及$a'<b'$, 作函数$$f(x)=\begin{cases}
ax\sin^2{\frac1x}+bx\cos^2{\frac1x}&x>0\\
0&x=0 \\
a'x\sin^2{\frac1x}+b'x\cos^2{\frac1x}&x<0
\end{cases}$$
>容易验证$\D^+f(0)=b,\D_+f(0)=a,\D_-f(0)=a',\D^-f(0)=b'$.



