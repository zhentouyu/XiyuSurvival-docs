# TPA
| 命令 Command | 描述 Description |
|:-|:-|
| `/tpa <player>` | 传送到指定玩家 |
| `/tpahere <player>` | 指定玩家传送到你 |
| `/tpayes` | 同意传送申请 |
| `/tpano` | 拒绝传送申请 |
| `/tpacancel` | 取消传送申请 |
| `/tpr` | 随机传送(范围x,z -5000~5000) |
| `/sethome <name>`或`/setwarp <name>` | 设置传送点(home和warp互相独立) |
| `/home <name>`或`/warp <name>` | 传送到指定传送点(/home不加target则传送到自己的床(若有)) |
| `/delhome`或`/delwarp` | 删除传送点 |
| `/homes`或`/warps` | 列出所有传送点 |

为了方便玩家之间的传送，我们加入了TPA系统。TPA不消耗点数。

我们不太建议在发送传送后移动，因为对方的位置可能并不适合移动（如距离岩浆较近）。在传送请求同意后的等待，如果受到伤害，会取消传送。

传送点数量暂无限制。