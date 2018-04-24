<template>
    <div class="ui-header table">
        <div class="area-left table-cell">
            <div class="btn">
                <i class="fas fa-bars"></i>
                <span class="badge">Badge</span>
            </div>
        </div>
        <div class="area-right table-cell">
            <div class="btn">
                <span class="btn-txt">Next</span>
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
        <div class="area-title table">
            <div class="header-title table-cell">Title Text</div>
        </div>
        <div class="header-bg"></div>
    </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
    $headerHeight: 55px;
    $headerPadding: 15px;
    $headerColor: #eee;
    $badgeColor: #ff3b30;
    $iconColorActive: #007aff;
    $iconColorDim: #aaa;
    $iconColor: Inherit; // defined in #app
    .ui-header {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 99;
        height: $headerHeight;
        .area-left, .area-right {
            width: 50%;
            .btn {
                display: inline-block;
                i {
                    font-size: 1.4em;
                    vertical-align: middle;
                    color: $iconColor;
                }
                .btn-txt {
                    display: inline-block;
                    font-size: 0.9em;
                }
                .badge {
                    background-color: $badgeColor;
                    border-radius: 1em;
                    color: #fff;
                    font-size: 0.7em;
                    font-weight: bold;
                    padding: 0.2em 0.7em;
                }
            }
        }
        .area-left {
            text-align: left;
            padding-left: $headerPadding;
            i {
                margin-right: 5px;
            }
        }
        .area-right {
            text-align: right;
            padding-right: $headerPadding;
            i {
                margin-left: 5px;
            }
        }
        .area-title {
            background-color: transparent;
            height: $headerHeight;
            left: 0;
            top: 0;
            position: absolute;
            width: 100%;
            text-align: center;
            z-index: -1;
            .header-title {
                font-weight: bold;
                font-size: 1.1em;
            }
        }
        .header-bg {
            background-color: $headerColor;
            height: $headerHeight;
            left: 0;
            top: 0;
            position: absolute;
            width: 100%;
            z-index: -2;
        }
    }
</style>
