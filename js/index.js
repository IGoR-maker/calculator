
    $(function(){
        $('#b1').click(function(){$('#expr').val($('#expr').val()+'1');});
        $('#b2').click(function(){$('#expr').val($('#expr').val()+'2');});
        $('#b3').click(function(){$('#expr').val($('#expr').val()+'3');});
        $('#b4').click(function(){$('#expr').val($('#expr').val()+'4');});
        $('#b5').click(function(){$('#expr').val($('#expr').val()+'5');});
        $('#b6').click(function(){$('#expr').val($('#expr').val()+'6');});
        $('#b7').click(function(){$('#expr').val($('#expr').val()+'7');});
        $('#b8').click(function(){$('#expr').val($('#expr').val()+'8');});
        $('#b9').click(function(){$('#expr').val($('#expr').val()+'9');});
        $('#b0').click(function(){$('#expr').val($('#expr').val()+'0');});
        $('#bDot').click(function(){$('#expr').val($('#expr').val()+'.');});
        $('#bDel').click(function(){$('#expr').val($('#expr').val().slice(0,-1));});
        $('#bClear').click(function(){$('#expr').val("");});
        $('#bPlus').click(function(){$('#expr').val($('#expr').val()+'+');});
        $('#bMinus').click(function(){$('#expr').val($('#expr').val()+'-');});
        $('#bDiv').click(function(){$('#expr').val($('#expr').val()+'/');});
        $('#bMult').click(function(){$('#expr').val($('#expr').val()+'*');});
        $('#bCalc').click(function(){$('#expr').val(eval($('#expr').val()));});

    });

