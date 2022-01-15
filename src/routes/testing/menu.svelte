<style>
	.child {
		background-color: yellow;
	}

	.parent:hover .child {
		opacity: 0.25;
	}

	.parent .child:hover {
		opacity: 1;
	}
</style>

<div class="parent pt-72 mx-auto container flex flex-row space-x-11">
    <div class="child">y</div>
    <div class="child">y</div>
    <div class="child">y</div>
    <div class="child">y</div>
    <div class="child">y</div>
    <div class="child">y</div>

</div>