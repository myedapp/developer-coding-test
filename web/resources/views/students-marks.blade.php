@extends('master')

@section('content')

<div>
@if(is_array($sMarks))
    @foreach($sMarks as $sm)
    <ul class="list-group">
        <li class="list-group-item list-group-item-success"><strong><a>Student: {{ $sm['fullname'] }}</a></strong></li>
        @foreach($sm['quest_paths'] as $qp)
        <li class="list-group-item"><strong>Quest: </strong> {{ $qp['quest']['name'] }} </li>
        <ul>
                @if(!$qp['mark']['mark'])
                    <li>No marks for this quest</li>
                @else
                <li> Completion: {{ $qp['mark']['completion'] }}%</li></br>
                <li> Mark: {{ $qp['mark']['mark'] }}%</li>
                @endif
        </ul>
        @endforeach
    </ul>
    @endforeach
@else
    <!-- No students to display -->
    <ul>
      <li>No students to display</li>
    </ul>
@endif
</div>

@endsection
